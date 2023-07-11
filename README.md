## cyph3rs.xyz frontend

---

## Development

To change code:

```
cd ../vue
npm install
npm run dev
```

You can check changes at `localhost`.

---

## Deployment 

Once you are satisfied with the changes, run:

```
npm run build
```

Then create a PR, first to `staging`, then to `main` (see below).

#### production: 

* branch `main`
* only merge after pr review
* Link: [cyph3rs.xyz](https://www.cyph3rs.xyz)


#### staging: 

* branch `staging`
* just push a pr to this branch to staging
* link: [staging.searchers.market](https://staging.searchers.market) (at some point this need to be protected under under creds or removed)

<br>

<p align="center">
<img src="https://user-images.githubusercontent.com/1130416/210270666-e0aec987-39db-483f-abbe-f5edad38f3f7.png" width="50%" align="center" style="padding:1px;border:1px solid black;">
  

</p>

---

## Contributing

####

All code must be formatted by [volar](https://github.com/johnsoncodehk/volar)

To auto-format on save in visual studio code add this to your `settings.json`
```
"[vue]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "Vue.volar"
},
```
