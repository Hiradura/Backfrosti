const db = require("./db")

async function getDatas() {
    const rows = await db.query(
        "select * from `1800`"
    )
    return rows?rows:[]
}

async function create(name){
    const result = await query(
        `insert into names (name, capital, population, area, flag) values(?,?,?,?,?,?)`,
         [name.name, name.capital, name.population, name.area, name.flag]
    )

    let message="Wrong ID oder password"
    if (result.affectedRows) {
        message="Siker"
    }
    return {message}

}

module.exports={getDatas,create}