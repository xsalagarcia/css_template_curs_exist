# Estructura pròpia

```
css/
│
├── colors/
│   └── my-color-schema.css
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

## base.css
Complement a [reset.css](##reset.css), que dóna un format bàsic a diferents elements com p, h1-h6...

## grid.css
grid amb flexbox.

## style.css
Estils concrets i recursos per a diferents elements com menús, 
buttons, centrats de text...

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
    <link rel="stylesheet" href="css/colors/my-color-schema.css">
    <link rel="stylesheet" href="css/reset.css">
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