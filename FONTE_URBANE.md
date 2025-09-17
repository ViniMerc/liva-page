# Configuração da Fonte Urbane

## Como obter a fonte Urbane

A fonte Urbane está disponível através do Adobe Fonts. Para usá-la no projeto:

### Opção 1: Adobe Fonts (Recomendado)
1. Acesse [Adobe Fonts](https://fonts.adobe.com/fonts/urbane)
2. Faça login com sua conta Adobe Creative Cloud
3. Ative a fonte Urbane
4. Crie um projeto web no Adobe Fonts
5. Adicione a família Urbane ao seu projeto
6. Copie o código `<link>` fornecido
7. Substitua `your-project-id` no arquivo `src/app/layout.js` pelo ID do seu projeto

### Opção 2: Fontes Locais
1. Baixe os arquivos de fonte Urbane nos formatos WOFF2 e WOFF
2. Coloque os arquivos na pasta `public/fonts/` com os seguintes nomes:
   - `urbane-light.woff2` e `urbane-light.woff`
   - `urbane-regular.woff2` e `urbane-regular.woff`
   - `urbane-medium.woff2` e `urbane-medium.woff`
   - `urbane-semibold.woff2` e `urbane-semibold.woff`
   - `urbane-bold.woff2` e `urbane-bold.woff`

## Configuração Atual

O projeto já está configurado para usar a fonte Urbane com as seguintes características:

- **Família de fonte**: `"urbane", "Urbane"`
- **Fallbacks**: Sistema de fontes do sistema operacional
- **Pesos disponíveis**: 300, 400, 500, 600, 700
- **Variáveis CSS**: Configuradas em `src/app/globals.css`

## Variáveis CSS Disponíveis

```css
--font-family: "urbane", "Urbane", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

## Uso nos Componentes

Para usar diferentes pesos da fonte Urbane nos componentes:

```css
.title {
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
}

.subtitle {
  font-family: var(--font-family);
  font-weight: var(--font-weight-semibold);
}

.body {
  font-family: var(--font-family);
  font-weight: var(--font-weight-regular);
}
```

## Notas Importantes

- Certifique-se de ter a licença adequada para usar a fonte Urbane
- A fonte será aplicada automaticamente em todo o projeto através da variável `--font-family`
- O `font-display: swap` está configurado para melhor performance de carregamento
