import { FC, useEffect, useMemo, useState } from 'react';
import { Editor, EditorProps } from '@monaco-editor/react';
import YAML from 'json-to-pretty-yaml';
import { ButtonGroup, Button, MenuItem, Select, styled } from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';
import { validateAndParseJSON } from '@/utils/helper';
import Toolbar from '@components/Toolbar';

const fileExtension = {
  json: 'json',
  yaml: 'yaml',
  php: 'php',
  csv: 'csv',
  typescript: 'ts',
};

const CustomizedEditor = styled(Editor)(() => ({
  height: '700px',
  border: 'none',
  '@media (max-width: 600px)': {
    marginBottom: 20,
    border: '1px solid #ccc',
  },
  '.view-lines': {
    padding: '0 0 0 8px',
  },
}));

const Wrapper = styled('div')({
  position: 'relative',
  width: '100%',
  padding: 0,
});

const EditorContainer = styled('div')(() => ({
  display: 'flex',
  border: '1px solid #ccc',
  padding: '0 !important',
  borderRadius: 5,
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    gap: 20,
    border: 'none',
  },
}));

const EditorWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  padding: 0,
  '&:last-of-type': {
    borderLeft: '1px solid #ccc',
  },
  '&:first-of-type': {
    borderRight: '1px solid #ccc',
  },
  '@media (max-width: 600px)': {
    marginBottom: 20,
    borderBottom: '1px solid #ccc',
  },
});

const StyledButtonGroup = styled(ButtonGroup)({
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    width: '100%',
  },
});

const Prettier: FC<any> = () => {
  const [value, setValue] = useState(
    '{"name": "John","age": 30,"city": "New York"}'
  );
  const [indent, setIndent] = useState(2);
  const [_hasError, setHasError] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [types, setTypes] = useState<Record<string, any>>({});
  const [formattedValue, setFormattedValue] = useState('');

  const [theme, setTheme] = useState('vs-dark');

  const handleChange = (value?: string) => {
    if (!value) {
      setFormattedValue('');
      setHasError(false);
    }
    setValue(value || '');
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
    let firstType = '';
    let type: string = typeof value[0];
    for (const element of value) {
      if (
        typeof element === 'object' &&
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
      type = `[${elementTypes.join(', ')}]`;
    }

    return type;
  };

  useEffect(() => {
    let formattedValue = '';
    for (const [key, obj] of Object.entries(types)) {
      formattedValue += `interface ${key} {\n`;
      for (const [key, value] of Object.entries(obj.value)) {
        for (let i = 1; i <= indent; i++) formattedValue += ' ';
        formattedValue += `${key}: ${value}\n`;
      }
      formattedValue += '}\n\n';
    }

    setFormattedValue(formattedValue);
  }, [types]);

  function getTypeObject(obj: any): Record<string, string> {
    const typeObject: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null) {
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
    setCurrentLanguage('typescript');
    try {
      const { obj } = validateAndParseJSON(value);
      setTypes((prev) => ({
        ...prev,
        ['IRoot']: { value: getTypeObject(obj) },
      }));
    } catch (error: SyntaxError | any) {
      setHasError(true);
      setFormattedValue(error.message);
    }
  };

  const minify = (isEditor = false) => {
    let updaterFunction = setFormattedValue;

    try {
      if (isEditor) {
        updaterFunction = setValue;
      } else {
        setCurrentLanguage('json');
      }
      const { obj } = validateAndParseJSON(value);

      updaterFunction(JSON.stringify(obj));
    } catch (error: SyntaxError | any) {
      setHasError(true);
      updaterFunction(error.message);
    }
  };

  const formatToCSV = () => {
    try {
      setCurrentLanguage('csv');
      const { obj } = validateAndParseJSON(value);

      const keys = Object.keys(obj);
      const values = Object.values(obj);
      let formattedValue = keys.join(',') + '\n';
      formattedValue += values.join(',');
      setFormattedValue(formattedValue);
    } catch (error: SyntaxError | any) {
      setHasError(true);
      setFormattedValue(error.message);
    }
  };

  const format = (isEditor = false) => {
    let updaterFunction = setFormattedValue;
    try {
      if (isEditor) {
        updaterFunction = setValue;
      } else {
        setCurrentLanguage('json');
      }

      const { obj } = validateAndParseJSON(value);

      updaterFunction(JSON.stringify(obj, null, indent));
    } catch (error: SyntaxError | any) {
      setHasError(true);
      updaterFunction(error.message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedValue);
  };

  const formatToYAML = () => {
    try {
      setCurrentLanguage('yaml');
      const { obj } = validateAndParseJSON(value);

      setFormattedValue(YAML.stringify(obj));
    } catch (error: SyntaxError | any) {
      setHasError(true);
      setFormattedValue(error.message);
    }
  };

  const formatToPHP = () => {
    try {
      setCurrentLanguage('php');
      const { obj } = validateAndParseJSON(value);

      let formattedValue = JSON.stringify(obj, null, indent)
        .replace(/{/g, '[')
        .replace(/}/g, ']')
        .replace(/:/g, ' =>');
      formattedValue = `<?php \n $arrayVar = ${formattedValue}`;
      setFormattedValue(formattedValue);
    } catch (error: SyntaxError | any) {
      setHasError(true);
      setFormattedValue(error.message);
    }
  };

  const downloadAsFile = () => {
    const element = document.createElement('a');
    const file = new Blob([formattedValue], {
      type: 'text/plain;charset=utf-8',
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
      case 'yaml':
        formatToYAML();
        break;
      case 'php':
        formatToPHP();
        break;
      case 'csv':
        formatToCSV();
        break;
      case 'typescript':
        generateType();
        break;
      default:
        format();
        break;
    }
  }, [indent]);

  const editorOptions: EditorProps['options'] = useMemo(() => {
    return {
      fontSize: 16,
      codeLens: false,
      tabSize: indent,
      minimap: {
        enabled: false,
      },
      automaticLayout: true,
      contextmenu: false,
      renderLineHighlightOnlyWhenFocus: true,
      wordWrap: 'on',
      theme,
      rulers: [0],
      cursorBlinking: 'expand',
      cursorSmoothCaretAnimation: 'explicit',
      padding: {
        top: 10,
        bottom: 10,
      },
      lightbulb: {
        enabled: true,
      },
      showDeprecated: true,
      peekWidgetDefaultFocus: 'editor',
      guides: {
        indentation: false,
      },
      scrollBeyondLastLine: false,
      scrollbar: {
        vertical: 'hidden',
      },
    };
  }, [theme, indent]);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: 10,
          marginBottom: 20,
        }}
      ></div>
      <div style={{ padding: '20px' }}>
        <EditorContainer>
          <EditorWrapper>
            <CustomizedEditor
              height='700px'
              width='100%'
              defaultLanguage='json'
              value={value}
              onChange={handleChange}
              options={editorOptions}
              onMount={(editor) => {
                editor.updateOptions({
                  theme: 'vs-dark',
                });
              }}
            />
            <Toolbar minify={minify} prettify={format} />
          </EditorWrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
            }}
          >
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={indent}
              label='Indent'
              style={{ height: 36, marginLeft: 8, marginBottom: 24 }}
              onChange={(e) => setIndent(Number(e.target.value))}
            >
              <MenuItem value={2}>2 tab space </MenuItem>
              <MenuItem value={3}>3 tab space</MenuItem>
              <MenuItem value={5}>4 tab space</MenuItem>
            </Select>
            <Select
              labelId='demo-simple-select-label'
              value={theme}
              label='Indent'
              style={{ height: 36, marginLeft: 8, marginBottom: 24 }}
              onChange={(e) => setTheme(e.target.value)}
            >
              <MenuItem value='vs-dark'>Dark</MenuItem>
              <MenuItem value='light'>Light</MenuItem>
            </Select>
            <StyledButtonGroup
              variant='contained'
              color='primary'
              aria-label='outlined primary button group'
              orientation='vertical'
            >
              <Button color='primary' onClick={() => format()}>
                Prettier
              </Button>
              <Button color='primary' onClick={formatToPHP}>
                PHP
              </Button>
              <Button color='primary' onClick={formatToYAML}>
                YAML
              </Button>
              <Button color='primary' onClick={generateType}>
                Typescript
              </Button>
              <Button color='primary' onClick={() => minify()}>
                Minify
              </Button>
              <Button color='primary' onClick={formatToCSV}>
                CSV
              </Button>
            </StyledButtonGroup>
          </div>
          <EditorWrapper>
            <CustomizedEditor
              height='700px'
              language={currentLanguage}
              value={formattedValue}
              options={editorOptions}
              onMount={(editor) => {
                editor.updateOptions({
                  theme: 'vs-dark',
                });
              }}
            />
            <Toolbar download={downloadAsFile} copy={copyToClipboard} />
          </EditorWrapper>
        </EditorContainer>
      </div>

      <div id='bottom-ad'></div>
    </div>
  );
};

export default Prettier;
