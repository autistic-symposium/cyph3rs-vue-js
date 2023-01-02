## CYPH3RS Platform Frontend

<br>

### Branches

#### production: 

* `main`
* only merge after pr review
* https://www.cyph3rs.xyz/


#### staging: 

* `staging
* just push a pr to this branch to stage
* check at https://staging.searchers.market (at some point this need to be protected under under creds or removed)

![Screen Shot 2023-01-02 at 11 08 59 AM](https://user-images.githubusercontent.com/1130416/210270666-e0aec987-39db-483f-abbe-f5edad38f3f7.png)


----

### Development

To change code:

```
cd ../vue
npm install
npm run dev
```

You can check at `localhost`.


<br>


### Deployment 

Once you are satisfied with the changes, run:

```
npm run build
```

Then create a PR, first to `staging`, then to `main`.
