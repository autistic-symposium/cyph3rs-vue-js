## cyph3rs.xyz frontend

<br>

<img width="900"  src="https://github.com/go-outside-labs/cyph3rs.xyz-frontend/assets/1130416/1c320ff3-b985-43d0-9392-7e3715d8348f">
<img width="900"  alt="Screenshot 2023-07-12 at 7 07 33 PM" src="https://github.com/go-outside-labs/cyph3rs.xyz-frontend/assets/1130416/6273ea42-f32c-4841-8a92-e355d7852469">

<br>
<br>

<img width="900"  alt="Screenshot 2023-07-12 at 7 07 51 PM" src="https://github.com/go-outside-labs/cyph3rs.xyz-frontend/assets/1130416/9eb8ab7b-a3fa-4524-ae70-106c64f18d6a">
<img width="900"  alt="Screenshot 2023-07-12 at 7 08 05 PM" src="https://github.com/go-outside-labs/cyph3rs.xyz-frontend/assets/1130416/eeae2a58-7d20-4474-9713-30bee61eea38">
<img width="900"   alt="Screenshot 2023-07-12 at 7 08 15 PM" src="https://github.com/go-outside-labs/cyph3rs.xyz-frontend/assets/1130416/24c204a3-aed3-43f2-bbb4-39ef83e0c93c">
<img width="900"  alt="Screenshot 2023-07-12 at 7 08 25 PM" src="https://github.com/go-outside-labs/cyph3rs.xyz-frontend/assets/1130416/b79f11ea-a9c6-4968-a89b-cf0a563974f0">


<br>

---

### Development

To change code:

```
cd ../vue
npm install
npm run dev
```

You can check changes at `localhost`.

<br>

---

### Deployment 

Once you are satisfied with the changes, run:

```
npm run build
```

Then create a PR, first to `staging`, then to `main` (see below).

#### production: 

* branch `main`
* only merge after pr review


#### staging: 

* branch `staging`
* just push a pr to this branch to staging


<br>

<p align="center">
<img src="https://user-images.githubusercontent.com/1130416/210270666-e0aec987-39db-483f-abbe-f5edad38f3f7.png" width="50%" align="center" style="padding:1px;border:1px solid black;">
  

</p>

<br>

---

### Contributing


All code must be formatted by [volar](https://github.com/johnsoncodehk/volar)

To auto-format on save in visual studio code add this to your `settings.json`
```
"[vue]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "Vue.volar"
},
```
