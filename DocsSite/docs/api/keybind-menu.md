# Keybind Menu

The Keybind Menu is a global UI component that displays a list of all active keybinds and their current state.

## Creating a Keybind Menu

You can create a keybind menu using the `Library:KeybindList` method. It is usually called once during initialization.

```lua
local KeybindList = Library:KeybindList("Active Keybinds")
```

### Arguments

| Argument | Type | Description |
| -------- | ---- | ----------- |
| `Title` | string | The title displayed at the top of the keybind list window. |

## Usage

Once created, the keybind list will automatically track any `Keybind` components you add to your sections. When a user toggles a keybind or it becomes active, it will appear in this list.

::: tip
The Keybind Menu is draggable and can be positioned anywhere on the screen by the user.
:::

## Example

```lua
local KeybindList = Library:KeybindList("My Keybinds")

-- Later in your code when adding a keybind
Section:Keybind({
    Name = "Kill Aura",
    Flag = "KillAura_Keybind",
    Default = Enum.KeyCode.V,
    Callback = function()
        print("Toggled Kill Aura")
    end
})
```
