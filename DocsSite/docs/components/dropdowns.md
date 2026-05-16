# Dropdowns

Dropdowns allow users to select one or multiple items from a list of options.

## Dropdown

Adds a dropdown to a section.

```lua
local TargetDropdown = CombatSection:Dropdown({
    Name = "Select Target",
    Flag = "TargetSelection",
    Values = {"Player1", "Player2", "Player3"},
    Multi = false,
    Default = "Player1", -- Or a table if Multi = true
    Callback = function(Value)
        print("Selected:", Value)
    end
})
```

### Arguments

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `Name` | string | The text displayed above the dropdown. |
| `Flag` | string | A unique identifier for SaveManager. |
| `Values` | table | An array of string options. |
| `Multi` | boolean | If true, allows selecting multiple options. |
| `Default` | string/table| The default selected option(s). |
| `Callback` | function | Runs when the selection changes. |
