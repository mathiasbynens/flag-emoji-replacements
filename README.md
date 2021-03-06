# Interesting flag emoji replacements

[@iwsfutcmd](https://github.com/iwsfutcmd) [shared an interesting observation](https://twitter.com/iwsfutcmd/status/1471250563677388800):

```js
'๐ง๐ฌ๐ญ๐ท'.replace('๐ฌ๐ญ', '๐ฆ๐ฌ'); // โ '๐ง๐ฆ๐ฌ๐ท'
```

This repository contains every possible variation of this gotcha according to Unicode 14โs `RGI_Emoji_Flag_Sequence`. Thereโs [9,211,570 different variations clocking in at 718.50 MB](https://github.com/mathiasbynens/flag-emoji-replacements/tree/main/output), so the output is split across multiple files.

Examples:

```js
'๐ป๐ฆ๐ฉ๐ฒ'.replace('๐ฆ๐ฉ', '๐ฌ๐บ'); // โ '๐ป๐ฌ๐บ๐ฒ'
'๐ฐ๐ท๐ช๐น'.replace('๐ท๐ช', '๐ณ๐ฑ'); // โ '๐ฐ๐ณ๐ฑ๐น'
'๐จ๐ต๐ธ๐จ'.replace('๐ต๐ธ', '๐ป๐จ'); // โ '๐จ๐ป๐จ๐จ'
'๐ง๐ง๐ธ๐ฑ'.replace('๐ง๐ธ', '๐ช๐ฌ'); // โ '๐ง๐ช๐ฌ๐ฑ'
'๐ฆ๐น๐จ๐บ'.replace('๐น๐จ', '๐ธ๐ฒ'); // โ '๐ฆ๐ธ๐ฒ๐บ'
'๐ฌ๐ฑ๐ฆ๐ช'.replace('๐ฑ๐ฆ', '๐ฎ๐ช'); // โ '๐ฌ๐ฎ๐ช๐ช'
'๐ฑ๐ธ๐ฒ๐ญ'.replace('๐ธ๐ฒ', '๐ฐ๐ช'); // โ '๐ฑ๐ฐ๐ช๐ญ'
'๐น๐ป๐ฆ๐ซ'.replace('๐ป๐ฆ', '๐จ๐ฌ'); // โ '๐น๐จ๐ฌ๐ซ'
'๐ฌ๐ญ๐ท๐บ'.replace('๐ญ๐ท', '๐ธ๐ญ'); // โ '๐ฌ๐ธ๐ญ๐บ'
'๐ฆ๐ฌ๐ซ๐ฎ'.replace('๐ฌ๐ซ', '๐ฑ๐ธ'); // โ '๐ฆ๐ฑ๐ธ๐ฎ'
'๐ฌ๐ธ๐ฎ๐น'.replace('๐ธ๐ฎ', '๐น๐ฑ'); // โ '๐ฌ๐น๐ฑ๐น'
'๐ฌ๐ฎ๐ธ๐ฌ'.replace('๐ฎ๐ธ', '๐ง๐ง'); // โ '๐ฌ๐ง๐ง๐ฌ'
'๐น๐น๐ฒ๐ฆ'.replace('๐น๐ฒ', '๐ฌ๐น'); // โ '๐น๐ฌ๐น๐ฆ'
'๐ฌ๐ผ๐ซ๐ฒ'.replace('๐ผ๐ซ', '๐ง๐ฏ'); // โ '๐ฌ๐ง๐ฏ๐ฒ'
'๐จ๐ฐ๐ฌ๐ฆ'.replace('๐ฐ๐ฌ', '๐ฒ๐จ'); // โ '๐จ๐ฒ๐จ๐ฆ'
'๐ฒ๐ณ๐ฆ๐ด'.replace('๐ณ๐ฆ', '๐ซ๐ฎ'); // โ '๐ฒ๐ซ๐ฎ๐ด'
'๐ช๐ฆ๐ฎ๐จ'.replace('๐ฆ๐ฎ', '๐ญ๐ฒ'); // โ '๐ช๐ญ๐ฒ๐จ'
'๐ฎ๐น๐น๐ญ'.replace('๐น๐น', '๐ณ๐ช'); // โ '๐ฎ๐ณ๐ช๐ญ'
'๐ต๐ฌ๐บ๐ฌ'.replace('๐ฌ๐บ', '๐ฒ๐ฌ'); // โ '๐ต๐ฒ๐ฌ๐ฌ'
'๐ฑ๐ธ๐ธ๐ฝ'.replace('๐ธ๐ธ', '๐ฐ๐ฒ'); // โ '๐ฑ๐ฐ๐ฒ๐ฝ'
'๐บ๐พ๐น๐ป'.replace('๐พ๐น', '๐ฒ๐ฒ'); // โ '๐บ๐ฒ๐ฒ๐ป'
'๐ธ๐ช๐น๐ฉ'.replace('๐ช๐น', '๐ฑ๐จ'); // โ '๐ธ๐ฑ๐จ๐ฉ'
'๐ฌ๐ช๐ธ๐ญ'.replace('๐ช๐ธ', '๐ธ๐น'); // โ '๐ฌ๐ธ๐น๐ญ'
'๐ธ๐ฉ๐ฒ๐ฌ'.replace('๐ฉ๐ฒ', '๐ฌ๐ช'); // โ '๐ธ๐ฌ๐ช๐ฌ'
'๐ธ๐ฒ๐ฆ๐ฎ'.replace('๐ฒ๐ฆ', '๐ง๐ณ'); // โ '๐ธ๐ง๐ณ๐ฎ'
```

To get a random example:

```sh
shuf -n 1 < output/$(ls output/ | shuf -n 1)
```

The general pattern is the following, where `A`, `B`, `C`, `D`, `E`, and `F` are all flag emoji, and `{A, B}` are distinct from `{C, D, E, F}`:

```js
'AB'.replace('C', 'D'); // โ 'EF'
```

Note that `{C, D}` may overlap with `{E, F}`, as that leads to even more confusing results, e.g.:

```js
'๐ฒ๐ฆ๐ธ๐ฑ'.replace('๐ฆ๐ธ', '๐ฒ๐ฒ'); // โ '๐ฒ๐ฒ๐ฒ๐ฑ'
```

## Explanation

Unicode defines the following 26 `Regional_Indicator` symbols:

```
๐ฆ ๐ง ๐จ ๐ฉ ๐ช ๐ซ ๐ฌ ๐ญ ๐ฎ ๐ฏ ๐ฐ ๐ฑ ๐ฒ ๐ณ ๐ด ๐ต ๐ถ ๐ท ๐ธ ๐น ๐บ ๐ป ๐ผ ๐ฝ ๐พ ๐ฟ
```

Combining two of these into a [country code](https://unicode.org/reports/tr51/#Flags "Unicode region subtag") results in the flag emoji for that country. So, @iwsfutcmdโs example:

```js
'๐ง๐ฌ๐ญ๐ท'.replace('๐ฌ๐ญ', '๐ฆ๐ฌ'); // โ '๐ง๐ฆ๐ฌ๐ท'
```

โฆis actually the following (with spaces added for clarity):

```js
'๐ง ๐ฌ ๐ญ ๐ท'.replace('๐ฌ ๐ญ', '๐ฆ ๐ฌ'); // โ '๐ง ๐ฆ ๐ฌ ๐ท'
```

The code replaces the second half (๐ฌ) of the first flag emoji (๐ง๐ฌ) and the first half (๐ญ) of the second flag emoji (๐ญ๐ท), thus changing both the first and second emoji.
