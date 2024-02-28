# The typical structure

```
styles/
│
├── reset.css
├── base.css
├── layout.css
├── components/
│   ├── buttons.css
│   ├── forms.css
│   └── ...
│
├── utilities.css
├── themes/
│   ├── light.css
│   ├── dark.css
│   └── ...
│
├── vendors/
│   ├── bootstrap.css
│   └── ...
│
├── customizations/
│   ├── custom-colors.css
│   └── ...
│
└── print.css
```
## reset.css / normalize.css
Aquest fitxer normalitza o reseteja els estils css entre diferents navegadors i dóna un punt de partida.

## base.css
Aquest fitxer conté els estils bàscics per els elements html (body, p, h1-h6, a...) i estils globals com tipografia, colors, i altres estructures de disposicions/layout bàsiques.

## layout.css
Defineix la estructura de disposició/layout bàsica. Estils per les àrees header, footer, sidebar, main. També pot incloure grids o flexbox.

## components
Una carpeta de css o un sol fitxer amb estils de components o mòduls del website, com ara buttons, forms, menús de navegació, cards... Idealment cada component hauria de tenir el seu propi fitxer css per organitzar-ho millor.

## utilities.css
Aquest fitxer inclou classes d'utilitat (utility classes) per aplicar estils ràpidament i de propòsit concret com espai, alineació, visibilitat...

## themes (Opcional)
Carpeta on hi ha diferents temes en fitxers css separats, per varis temes o variacions del disseny (nit-dia...)

## vendors
Si s'utilitzen bibolioteques de tercers o frameworks, aquests fitxers anirien aquí. (Bootstrap, Materialize...)

## customizations
Si la plantilla permet als usuaris d'aquesta customitzar certs aspectes del disseny (color schemes, fonts...) hauria de tenir fitxers css separats per desar aquestes customitzacions.

## print.css
Aquest fitxer conté estils específicament fets a mida per imprimir la pàgina web i assegurar que la versió imprimible es llegible.

## Codi HTML que integra els fitxers
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <!-- Include Reset/Normalize CSS -->
    <link rel="stylesheet" href="styles/reset.css">
    <!-- Include Base Styles -->
    <link rel="stylesheet" href="styles/base.css">
    <!-- Include Layout Styles -->
    <link rel="stylesheet" href="styles/layout.css">
    <!-- Include Component Styles -->
    <link rel="stylesheet" href="styles/components/buttons.css">
    <link rel="stylesheet" href="styles/components/forms.css">
    <!-- Include Utility Styles -->
    <link rel="stylesheet" href="styles/utilities.css">
    <!-- Include Theme Styles (Optional) -->
    <link rel="stylesheet" href="styles/themes/light.css">
    <!-- Include Vendor Styles (Optional) -->
    <link rel="stylesheet" href="styles/vendors/bootstrap.css">
    <!-- Include Customization Styles (Optional) -->
    <link rel="stylesheet" href="styles/customizations/custom-colors.css">
    <!-- Include Print Styles (Optional) -->
    <link rel="stylesheet" href="styles/print.css">
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