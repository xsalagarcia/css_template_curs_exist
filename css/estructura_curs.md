# Estructura proposada al curs

```
css/
│
├── reset.css
├── grid.css
├── style.css
└── custom.css
```
## reset.css / normalize.css
Aquest fitxer normalitza o reseteja els estils css entre diferents navegadors i dóna un punt de partida.

## grid.css
Defineix la estructura del grid, p.ex. amb el model flexbox. Més o menys equivaldria a layout.css de la estructura típica.

## style.css
Inclou:
colors
tipografia
format de texts (headings, paragrafs)
taules
imatges
buttons
icons
resources
forms

## custom.css
Aspectes molt concrets a utilitzar únicament en el projecte en curs.

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
    <link rel="stylesheet" href="css/normalize.css">
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