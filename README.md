# Welcome to multishare, a tool to share your music!

![](https://github.com/mrquantumoff/multishare/raw/master/screenshots/screenshot.png)

### Requirements:
* A supabase instance
* A place to deploy
* Your song/album distributed to spotify, apple music.

### Setting up:
* Create a new database in supabase
* Create a new table called ``Songs`` that looks like this: ![](https://github.com/mrquantumoff/multishare/raw/master/screenshots/table.png)
* "id" is used for your url (e.g the id of "https://music.mrquantumoff.dev/sehrihuzun" is ``sehrihuzun``)
* #### I highly recommend using the artwork url from spotify's cdn (you can find it by inspecting the element on spotify's website, it should look like this ![](https://github.com/mrquantumoff/multishare/raw/master/screenshots/spotifyplayer.png), 640w is required for the official implementation, but you can modify next.js configuration to support other domains)
* All the other fields are intuitive.
* Either create a ``.env`` file with the supabase credentials that allow you to read the created table or specify the ```SUPABASE_URL``` and ```SUPABASE_KEY``` environment variables by yourself.
* And then run
```bash
pnpm install
pnpm start
```