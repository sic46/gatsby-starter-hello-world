import React from 'react'
import { useStaticQuery,graphql} from 'gatsby'
const getData = graphql

const FetchData = () => {
    const data = useStaticQuery(getData);
    return (
        <div>
            <h1>Site title: {data.site.info.title}</h1>
        </div>
    )
}

export default FetchData
