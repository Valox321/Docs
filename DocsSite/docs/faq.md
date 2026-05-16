# Frequently Asked Questions

Here are some common questions and answers about using the UI Library.

## General

### Is the library free to use?
Yes, the library is open-source and free to use in your own scripts.

### Does it support mobile execution?
Yes, the UI is designed to be responsive and works on mobile executors that support standard Roblox drawing and input APIs.

## Technical Issues

### Why is my UI not saving?
Make sure you have correctly set up the **SaveManager**. You must call `SaveManager:SetFolder("YourFolderName")` before trying to save. Also, ensure you are calling the save function in your script.

### Icons are not loading
If you are using custom Lucide icons and they show up as blanks or errors, verify that you have an active internet connection when the script first loads, as the icons might be fetched from an external source or a GitHub repository.

### The UI is too large/small
You can adjust the default size of the UI when calling `CreateWindow` by passing a custom `UDim2` value to the `Size` argument.

```lua
Size = UDim2.fromOffset(400, 300) -- Smaller window
```
