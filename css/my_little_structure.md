# Estructura pròpia
Estructura d'una plantilla, a partir de diferents propostes.

```
css/
│
├── colors/
│   └── my-color-schema.css
├── fonts.css
├── reset.css
├── base.css
├── grid.css
├── style.css
└── custom.css
```
## reset.css
Aquest fitxer normalitza o reseteja els estils css entre diferents navegadors i dóna un punt de partida.

## colors/
cada fitxer amb un tema de colors. Definit per diferents variables, escala de grisos, color i color de contrast.

## fonts.css
Defineix dues variables, una per els encapçalaments i una altre per el cos del text.

S'aplica un tema per defecte, però si s'utilitzen les classes definides dins un contenidor, s'aplica de forma concreta.
P.ex. Si ```<body class="roboto-merriweather">``` tot el contingut del body tindrà les tipografies merryweather per les etiquetes ```<h1> ... <h6>```.

## base.css
Complement a [reset.css](#resetcss), que dóna un format bàsic a diferents elements com p, h1-h6...

Només es seleccionen elements html, no les classes.

## grid.css
grid amb flexbox + media queries.

## style.css
Estils concrets i recursos per a diferents elements com menús, 
buttons, centrats de text...

A través de la selecció de classes.

Les classes definides són:
- Formatació text
    - *text-align-justify*: Justifica el text d'un block (p.ex. d'un paràgraf).
    - *text-align-center*: Centra el text d'un block.
    - *text-align-right*:
- Font
    - *bold*
    - *font-size-L*: 1.2rem;
- Buttons
    - *btn*: Defineix un element ```<a>``` com un botó.
    - *floating-block-bottom-right*: Intenció de anchor a baix a la dreta. Utilitzar amb ```<a>```
- Menu
    - *menu-bar*: Preparat per definir-se com a nav.menu-bar.row>a.col-n\{item-$\}*$   n: col-3, 4...
- Marges i paddings
    - *no-padding*: padding: 0;
    - *no-padding-top-bottom*: padding-top: 0; padding-bottom: 0;
    - *padding*: padding: 1rem;
    - *half-padding*
    - *quarter-padding*
    - *margin-top-bottom*: margin-top: 1rem; margin-bottom: 1rem;
    - *no-margin-top*
    - *no-margin-top-bottom*
    - *no-margin*
- Alineació de blocks
    - *center-block*: margin-right: auto; margin-left: auto;
- Backgrounds:
    - *background-color-n*: n = [1, 6]
    - *background-contrast-color-n*: n = [1, 6]
- Colors
    - *color-n*: n = [1, 6]
    - *contrast-color*: n = [1, 6]





## custom.css
Ajustos per al projecte en curs.


## Codi HTML que integra els fitxers
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Xavier Sala">
    <meta name="description" content="160 - 175 caracteres">
    <title>El títol de la web</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/colors/my-color-schema.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/custom.css">
</head>
<body>
    <!-- Your HTML content here -->
    <header>
        <!-- Header content -->
    </header>
    <nav>
        <!-- Navigation menu -->
    </nav>
    <main>
        <!-- Main content -->
    </main>
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```