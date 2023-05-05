import { FC, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import YAML from "json-to-pretty-yaml";
import {
  ButtonGroup,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Container,
  styled,
  IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import NavBar from "./NavBar";

const format = {
  json: "json",
  yaml: "yaml",
  php: "php",
  csv: "csv",
  typescript: "ts",
};

const CustomizedEditor = styled(Editor)(() => ({
  height: "700px",
  border: "none",
}));

const Prettier: FC = () => {
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
      formattedValue = `<?php \n $arrayVar = ${formattedValue}}`;
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
      format[currentLanguage as keyof typeof format]
    }`;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <div id="top-ad"></div>
      <NavBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <InputLabel id="indent">Indent:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={indent}
          label="Indent"
          style={{ height: 36, marginLeft: 8 }}
          onChange={(e) => setIndent(Number(e.target.value))}
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={5}>4</MenuItem>
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
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={format}>Prettier</Button>
          <Button onClick={formatToPHP}>PHP</Button>
          <Button onClick={formatToYAML}>YAML</Button>
          <Button onClick={generateType}>Typescript</Button>
          <Button onClick={minify}>Minify</Button>
          <Button onClick={formatToCSV}>CSV</Button>
        </ButtonGroup>
      </div>
      <div>
        <h1></h1>
      </div>
      <Container>
        <Container
          style={{
            display: "flex",
            border: "1px solid #ccc",
            padding: 0,
            borderRadius: 5,
          }}
        >
          <CustomizedEditor
            height="700px"
            defaultLanguage="json"
            defaultValue='{"name": "John", "age": 30, "city": "New York"}'
            onChange={handleChange}
            options={{
              codeLens: false,
              tabSize: indent,
              renderLineHighlight: "none",
              // lineDecorationsWidth: "1ch",
              minimap: {
                enabled: false,
              },
              overviewRulerBorder: false,
              overviewRulerLanes: 0,
            }}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              borderLeft: "1px solid #ccc",
            }}
          >
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

            <IconButton
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                zIndex: 100,
                transform: "translateY(-100%)",
              }}
              onClick={downloadAsFile}
            >
              <DownloadIcon />
            </IconButton>
          </div>
        </Container>
      </Container>

      <div id="bottom-ad"></div>
    </div>
  );
};

export default Prettier;
