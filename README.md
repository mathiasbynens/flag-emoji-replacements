# Interesting flag emoji replacements

[@iwsfutcmd](https://github.com/iwsfutcmd) [shared an interesting observation](https://twitter.com/iwsfutcmd/status/1471250563677388800):

```js
'🇧🇬🇭🇷'.replace('🇬🇭', '🇦🇬'); // → '🇧🇦🇬🇷'
```

Those flags are:

```
'${Bulgaria} ${Croatia}'.replace('${Ghana}', '${Antigua & Barbuda}'); // → '${Bosnia & Herzegovina} ${Greece}'
```

This repository contains every possible variation of this gotcha according to Unicode 16.0.0’s `RGI_Emoji_Flag_Sequence`. There’s [9,351,188 different variations clocking in at 729.42 MB](https://github.com/mathiasbynens/flag-emoji-replacements/tree/main/output), so the output is split across multiple files.

Examples:

```js
'🇻🇦🇩🇲'.replace('🇦🇩', '🇬🇺'); // → '🇻🇬🇺🇲'
'🇰🇷🇪🇹'.replace('🇷🇪', '🇳🇱'); // → '🇰🇳🇱🇹'
'🇨🇵🇸🇨'.replace('🇵🇸', '🇻🇨'); // → '🇨🇻🇨🇨'
'🇧🇧🇸🇱'.replace('🇧🇸', '🇪🇬'); // → '🇧🇪🇬🇱'
'🇦🇹🇨🇺'.replace('🇹🇨', '🇸🇲'); // → '🇦🇸🇲🇺'
'🇬🇱🇦🇪'.replace('🇱🇦', '🇮🇪'); // → '🇬🇮🇪🇪'
'🇱🇸🇲🇭'.replace('🇸🇲', '🇰🇪'); // → '🇱🇰🇪🇭'
'🇹🇻🇦🇫'.replace('🇻🇦', '🇨🇬'); // → '🇹🇨🇬🇫'
'🇬🇭🇷🇺'.replace('🇭🇷', '🇸🇭'); // → '🇬🇸🇭🇺'
'🇦🇬🇫🇮'.replace('🇬🇫', '🇱🇸'); // → '🇦🇱🇸🇮'
'🇬🇸🇮🇹'.replace('🇸🇮', '🇹🇱'); // → '🇬🇹🇱🇹'
'🇬🇮🇸🇬'.replace('🇮🇸', '🇧🇧'); // → '🇬🇧🇧🇬'
'🇹🇹🇲🇦'.replace('🇹🇲', '🇬🇹'); // → '🇹🇬🇹🇦'
'🇬🇼🇫🇲'.replace('🇼🇫', '🇧🇯'); // → '🇬🇧🇯🇲'
'🇨🇰🇬🇦'.replace('🇰🇬', '🇲🇨'); // → '🇨🇲🇨🇦'
'🇲🇳🇦🇴'.replace('🇳🇦', '🇫🇮'); // → '🇲🇫🇮🇴'
'🇪🇦🇮🇨'.replace('🇦🇮', '🇭🇲'); // → '🇪🇭🇲🇨'
'🇮🇹🇹🇭'.replace('🇹🇹', '🇳🇪'); // → '🇮🇳🇪🇭'
'🇵🇬🇺🇬'.replace('🇬🇺', '🇲🇬'); // → '🇵🇲🇬🇬'
'🇱🇸🇸🇽'.replace('🇸🇸', '🇰🇲'); // → '🇱🇰🇲🇽'
'🇺🇾🇹🇻'.replace('🇾🇹', '🇲🇲'); // → '🇺🇲🇲🇻'
'🇸🇪🇹🇩'.replace('🇪🇹', '🇱🇨'); // → '🇸🇱🇨🇩'
'🇬🇪🇸🇭'.replace('🇪🇸', '🇸🇹'); // → '🇬🇸🇹🇭'
'🇸🇩🇲🇬'.replace('🇩🇲', '🇬🇪'); // → '🇸🇬🇪🇬'
'🇸🇲🇦🇮'.replace('🇲🇦', '🇧🇳'); // → '🇸🇧🇳🇮'
```

To get a random example:

```sh
shuf -n 1 < output/$(ls output/ | shuf -n 1)
```

The general pattern is the following, where `A`, `B`, `C`, `D`, `E`, and `F` are all flag emoji, and `{A, B}` are distinct from `{C, D, E, F}`:

```js
'AB'.replace('C', 'D'); // → 'EF'
```

Note that `{C, D}` may overlap with `{E, F}`, as that leads to even more confusing results, e.g.:

```js
'🇲🇦🇸🇱'.replace('🇦🇸', '🇲🇲'); // → '🇲🇲🇲🇱'
```

## Explanation

Unicode defines the following 26 `Regional_Indicator` symbols:

```
🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿
```

Combining two of these into a [country code](https://unicode.org/reports/tr51/#Flags "Unicode region subtag") results in the flag emoji for that country. So, @iwsfutcmd’s example:

```js
'🇧🇬🇭🇷'.replace('🇬🇭', '🇦🇬'); // → '🇧🇦🇬🇷'
```

…is actually the following (with spaces added for clarity):

```js
'🇧 🇬 🇭 🇷'.replace('🇬 🇭', '🇦 🇬'); // → '🇧 🇦 🇬 🇷'
```

The code replaces the second half (🇬) of the first flag emoji (🇧🇬) and the first half (🇭) of the second flag emoji (🇭🇷), thus changing both the first and second emoji.
