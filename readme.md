# Spin Mono

This is a custom build of the [Iosevka](https://github.com/be5invis/Iosevka/)
font, personalized according to my own liking, created while building [Spin](https://github.com/fermyon/spin)
(hence the name).

It is based on Iosevka, and loosely inspired by JetBrains Mono.
(See [the configuration file for more details](./private-build-plans.toml).)

It is the font I use by default on all my systems, and it is not intended to be
a general-purpose font. Feel free to use it (assuming you respect (the original
Iosevka license](./LICENSE)).

### Building

See the [Iosevka documentation](https://github.com/be5invis/Iosevka/blob/main/doc/custom-build.md) on
custom font builds.

```bash
$ git clone https://github.com/radu-matei/spin-mono && cd spin mono
$ npm install
$ npm run build -- ttf::spin-mono
```

This will generate the font in your local `dist/` directory.
