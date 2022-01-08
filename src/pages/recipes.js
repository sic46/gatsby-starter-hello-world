import React from "react"
import Layout from "./components/Layout"
import Images from "./components/examples/Images"
import AllRecipes from "./components/AllRecipes"

const Recipes = () => {

    return (
        <Layout>
            <main className="page">
                <AllRecipes />
                <div><h1>Recipes</h1>
                Hello, about winston!
                </div>
                <Images/>
            </main>
        </Layout>
    )
}

export default Recipes