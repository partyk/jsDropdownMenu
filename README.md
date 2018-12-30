# jsDropdownMenu

Simple drop-down menu.

## Installation

```npm i js-dropdown-menu```

## How to use

Paste to between head tag 

```
<script type="application/javascript" src="../dist/jsDropdownMenu.js"></script>
<script>
    new jsDropdownMenu.defult();
</script>
```

Use as import module
```
import JsDropdownMenu from 'js-dropdown-menu/dist/jsDropdownMenu';

new JsDropdownMenu();
```

For add support internet explorer add polyfill for closest.

```dist/polifyllClosest.js```

Example: 
```
<!DOCTYPE html>
<html>
<head>
    <![if !IE]>
    <script type="application/javascript" src="../dist/polifyllClosest.js"></script>
    <![endif]>
    <script type="application/javascript" src="../dist/jsDropdownMenu.js"></script>
    <style>
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        ul li {
            width: 100px;
            float: left;
            background: #dbdbdb;
            line-height: 2em;
            text-align: center;
            margin: 0 5px;
            cursor: pointer;
        }

        ul li span {
            display: block;
        }

        ul li ul {
            display: none;
        }

        ul .dropdown-menu-show ul {
            display: block;
        }
    </style>
</head>
<body>
<ul>
    <li class="dropdown-menu">
        <span class="dropdown-menu-button">Item 1</span>
        <ul>
            <li>Sub Item 1</li>
            <li>Sub Item 2</li>
        </ul>
    </li>
    <li class="dropdown-menu">
        <span class="dropdown-menu-button">Item 2</span>
        <ul>
            <li>Sub Item 1</li>
            <li>Sub Item 2</li>
        </ul>
    </li>
    <li class="dropdown-menu">
        <span class="dropdown-menu-button">Item 3</span>
        <ul>
            <li>Sub Item 1</li>
            <li>Sub Item 2</li>
        </ul>
    </li>
    <li class="dropdown-menu">
        <span class="dropdown-menu-button">Item 4</span>
        <ul>
            <li>Sub Item 1</li>
            <li>Sub Item 2</li>
        </ul>
    </li>
</ul>
<script>
    new jsDropdownMenu.defult();
</script>
</body>
</html>
```