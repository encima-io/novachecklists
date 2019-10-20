# Laravel Nova Checklist Field

[![Latest Version on Packagist](https://img.shields.io/packagist/v/e2consult/novachecklists.svg)](https://packagist.org/packages/e2consult/novachecklists)
[![License](https://img.shields.io/packagist/l/e2consult/dnb-client.svg)](https://packagist.org/packages/e2consult/novachecklists)
[![Total Downloads](https://img.shields.io/packagist/dt/e2consult/dnb-client.svg)](https://packagist.org/packages/e2consult/novachecklists)

E2Consult is a webdevelopment team based in Oslo, Norway. You'll find more information about us [on our website](https://e2consult.no).

This package is made to allow you to easily create checklists in Laravel Nova. All you need is a text/json column on you model to store the items.

## Installation

You can install the package via composer:


```bash
composer require e2consult/novachecklists
```

## Usage

```php
use E2Consult\NovaChecklist\Checklist;

Checklist::make('Tasks')
    ->logUsers()
    ->showTimestamps()
    ->placeholder('Add another task')
    ->withPlaceholderCount()
    ->showItemStatusOnIndex()
    ->showCompletionOnIndex(),
```

The ->logUsers() method allows you to track which user created or completed a task/item. You specify which column on the User-model you want to save on task (for simplicity we only persist the users name).



## License

The MIT License (MIT).
