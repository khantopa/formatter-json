import { FC, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import YAML from "json-to-pretty-yaml";

const Prettier: FC = () => {
  const [value, setValue] = useState("");
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

  return (
    <div>
      <div id="top-ad"></div>
      <div style={{ display: "flex" }}>
        <Editor height="90vh" defaultLanguage="json" onChange={handleChange} />

        <Editor
          height="90vh"
          defaultLanguage="typescript"
          language={currentLanguage}
          value={formattedValue}
          defaultValue="// Your pretty types will appear here"
          options={{
            readOnly: true,
          }}
        />
      </div>

      <div style={{ display: "flex", textAlign: "center" }}>
        <label htmlFor="">Indent:</label>
        <input
          type="number"
          value={indent}
          onChange={(e) => setIndent(Number(e.target.value))}
        />
        <button disabled={!value} onClick={format}>
          Format
        </button>
        <button disabled={!value} onClick={formatToPHP}>
          Convert to PHP
        </button>
        <button disabled={!value} onClick={formatToYAML}>
          Convert to YAML
        </button>
        <button disabled={!value} onClick={generateType}>
          Generate Types
        </button>
      </div>
      <div id="bottom-ad"></div>
    </div>
  );
};

export default Prettier;
