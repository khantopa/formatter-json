import { FC, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import YAML from "json-to-pretty-yaml";
import {
  ButtonGroup,
  Button,
  MenuItem,
  Select,
  Container,
  styled,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

import Content from "./Content";

const fileExtension = {
  json: "json",
  yaml: "yaml",
  php: "php",
  csv: "csv",
  typescript: "ts",
};

const CustomizedEditor = styled(Editor)(() => ({
  height: "700px",
  border: "none",
  "@media (max-width: 600px)": {
    marginBottom: 20,
    border: "1px solid #ccc",
  },
}));

const EditorContainer = styled(Container)(() => ({
  display: "flex",
  border: "1px solid #ccc",
  padding: "0 !important",
  borderRadius: 5,
  "@media (max-width: 600px)": {
    flexDirection: "column",
    gap: 20,
    border: "none",
  },
}));

const EditorWrapper = styled("div")({
  position: "relative",
  width: "100%",
  padding: 0,
  "&:last-of-type": {
    borderLeft: "1px solid #ccc",
  },
  "@media (max-width: 600px)": {
    marginBottom: 20,
    borderBottom: "1px solid #ccc",
  },
});

const StyledButtonGroup = styled(ButtonGroup)({
  "@media (max-width: 600px)": {
    flexDirection: "column",
    width: "100%",
  },
});

const Prettier: FC<any> = () => {
  const [value, setValue] = useState(
    '{"name": "John", "age": 30, "city": "New York"}'
  );
  const [indent, setIndent] = useState(2);
  const [_hasError, setHasError] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [types, setTypes] = useState<Record<string, any>>({});
  const [formattedValue, setFormattedValue] = useState("");

  const handleChange = (value?: string) => {
    if (!value) {
      setFormattedValue("");
      setHasError(false);
    }
    setValue(value || "");
  };

  const handleObjectType = (key: string, value: object) => {
    const interfaceName = `I${key.charAt(0).toUpperCase()}${key.slice(1)}`;

    setTypes((prev) => ({
      ...prev,
      [interfaceName]: { value: getTypeObject(value) },
    }));

    return interfaceName;
  };

  const handleArrayType = (key: string, value: any[]) => {
    const elementTypes = [];
    let isSameType = true;
    let firstType = "";
    let type: string = typeof value[0];
    for (const element of value) {
      if (
        typeof element === "object" &&
        element !== null &&
        !Array.isArray(element)
      ) {
        const elementType = handleObjectType(key, element);
        elementTypes.push(elementType);
        continue;
      }
      const elementType = typeof element;
      if (!firstType) firstType = type;
      if (firstType !== elementType) isSameType = false;
      elementTypes.push(elementType);
    }

    if (isSameType) {
      type = `${elementTypes[0]}[]`;
    } else {
      type = `[${elementTypes.join(", ")}]`;
    }

    return type;
  };

  useEffect(() => {
    let formattedValue = "";
    for (const [key, obj] of Object.entries(types)) {
      formattedValue += `interface ${key} {\n`;
      for (const [key, value] of Object.entries(obj.value)) {
        for (let i = 1; i <= indent; i++) formattedValue += " ";
        formattedValue += `${key}: ${value}\n`;
      }
      formattedValue += "}\n\n";
    }

    setFormattedValue(formattedValue);
  }, [types]);

  function getTypeObject(obj: any): Record<string, string> {
    const typeObject: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value)) {
          typeObject[key] = `${handleArrayType(key, value)};`;
          continue;
        }
        typeObject[key] = `${handleObjectType(key, value)};`;
        continue;
      }
      typeObject[key] = `${typeof value};`;
    }
    return typeObject;
  }

  const generateType = () => {
    setHasError(false);
    setTypes([]);
    setCurrentLanguage("typescript");
    try {
      const obj = JSON.parse(value);
      setTypes((prev) => ({
        ...prev,
        ["IRoot"]: { value: getTypeObject(obj) },
      }));
    } catch (error: SyntaxError | any) {
      setHasError(true);
      setFormattedValue(error.message);
    }
  };

  const minify = () => {
    try {
      setCurrentLanguage("json");
      const obj = JSON.parse(value);
      setFormattedValue(JSON.stringify(obj));
    } catch (error: SyntaxError | any) {
      setHasError(true);
      setFormattedValue(error.message);
    }
  };

  const formatToCSV = () => {
    try {
      setCurrentLanguage("csv");
      const obj = JSON.parse(value);
      const keys = Object.keys(obj);
      const values = Object.values(obj);
      let formattedValue = keys.join(",") + "\n";
      formattedValue += values.join(",");
      setFormattedValue(formattedValue);
    } catch (error: SyntaxError | any) {
      setHasError(true);
      setFormattedValue(error.message);
    }
  };

  const format = () => {
    try {
      setCurrentLanguage("json");
      const obj = JSON.parse(value);
      setFormattedValue(JSON.stringify(obj, null, indent));
    } catch (error: SyntaxError | any) {
      setHasError(true);
      setFormattedValue(error.message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedValue);
  };

  const formatToYAML = () => {
    try {
      setCurrentLanguage("yaml");
      const obj = JSON.parse(value);
      setFormattedValue(YAML.stringify(obj));
    } catch (error: SyntaxError | any) {
      setHasError(true);
      setFormattedValue(error.message);
    }
  };

  const formatToPHP = () => {
    try {
      setCurrentLanguage("php");
      const obj = JSON.parse(value);

      let formattedValue = JSON.stringify(obj, null, indent)
        .replace(/{/g, "[")
        .replace(/}/g, "]")
        .replace(/:/g, " =>");
      formattedValue = `<?php \n $arrayVar = ${formattedValue}`;
      setFormattedValue(formattedValue);
    } catch (error: SyntaxError | any) {
      setHasError(true);
      setFormattedValue(error.message);
    }
  };

  const downloadAsFile = () => {
    const element = document.createElement("a");
    const file = new Blob([formattedValue], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);

    element.download = `formatted.${
      fileExtension[currentLanguage as keyof typeof fileExtension]
    }`;
    document.body.appendChild(element);
    element.click();
  };

  useEffect(() => {
    switch (currentLanguage) {
      case "yaml":
        formatToYAML();
        break;
      case "php":
        formatToPHP();
        break;
      case "csv":
        formatToCSV();
        break;
      case "typescript":
        generateType();
        break;
      default:
        format();
        break;
    }
  }, [indent]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={indent}
          label="Indent"
          style={{ height: 36, marginLeft: 8, marginTop: 24 }}
          onChange={(e) => setIndent(Number(e.target.value))}
        >
          <MenuItem value={2}>2 tab space </MenuItem>
          <MenuItem value={3}>3 tab space</MenuItem>
          <MenuItem value={5}>4 tab space</MenuItem>
        </Select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 10,
          marginBottom: 20,
        }}
      >
        <StyledButtonGroup
          variant="contained"
          color="warning"
          aria-label="outlined primary button group"
        >
          <Button color="warning" onClick={format}>
            Prettier
          </Button>
          <Button color="warning" onClick={formatToPHP}>
            PHP
          </Button>
          <Button color="warning" onClick={formatToYAML}>
            YAML
          </Button>
          <Button color="warning" onClick={generateType}>
            Typescript
          </Button>
          <Button color="warning" onClick={minify}>
            Minify
          </Button>
          <Button color="warning" onClick={formatToCSV}>
            CSV
          </Button>
        </StyledButtonGroup>
      </div>
      <Container>
        <EditorContainer>
          <EditorWrapper>
            <CustomizedEditor
              height="700px"
              defaultLanguage="json"
              defaultValue='{"name": "John", "age": 30, "city": "New York"}'
              onChange={handleChange}
              options={{
                codeLens: false,
                tabSize: indent,
                renderLineHighlight: "none",
                minimap: {
                  enabled: false,
                },
                overviewRulerBorder: false,
                overviewRulerLanes: 0,
                // @ts-ignore
                contextMenu: false,
              }}
            />
          </EditorWrapper>

          <EditorWrapper>
            <CustomizedEditor
              height="700px"
              defaultLanguage="typescript"
              language={currentLanguage}
              value={formattedValue}
              defaultValue={`{\n "name": "John",\n  "age": 30,\n  "city": "New York"\n}`}
              options={{
                renderLineHighlight: "none",
                readOnly: true,
                wordWrap: "on",
                // @ts-ignore
                scrollBar: {
                  vertical: "hidden",
                  horizontal: "hidden",
                },
                padding: { top: 8, bottom: 8 },
                minimap: {
                  enabled: false,
                },
                codeLens: false,
                overviewRulerBorder: false,
                scrollBeyondLastLine: false,
                renderLineHighlightOnlyWhenFocus: true,
                overviewRulerLanes: 0,
              }}
            />

            <Button
              variant="outlined"
              color="warning"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 100,
              }}
              onClick={copyToClipboard}
            >
              Copy
            </Button>

            <Button
              color="warning"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 100,
                transform: "translateY(-100%)",
                textTransform: "lowercase",
              }}
              onClick={downloadAsFile}
            >
              <DownloadIcon />.
              {fileExtension[currentLanguage as keyof typeof fileExtension]}
            </Button>
          </EditorWrapper>
        </EditorContainer>
        <div className="ad-before-content"></div>
        <Content />
      </Container>

      <div id="bottom-ad"></div>
    </div>
  );
};

export default Prettier;
