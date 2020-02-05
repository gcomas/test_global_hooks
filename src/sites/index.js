import React, { useState, useEffect } from "react"
import { Grid, Placeholder, Segment } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import { merge, headShake } from "react-animations"
import styled, { keyframes } from "styled-components"
import uuid from "uuid"
import axios from "axios"

import Posts from "../components/posts"
import Navigator from "../components/navigator"

const tadaFlip = merge(headShake)

const fadeAnimation = keyframes`${tadaFlip}`

const FadeInUp = styled(Grid.Column)`
   animation: 1s ${fadeAnimation};
`

const Index = props => {
   const initialData = [
      {
         id: uuid(),
         content: "Hacer asado de tira"
      },
      {
         id: uuid(),
         content: "Hacer pastas"
      },
      {
         id: uuid(),
         content: "Hacer empanadas"
      }
   ]

   const [posts, setPosts] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [postPerPage] = useState(6)

   useEffect(() => {
      const myData = async () => {
         await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setPosts(res.data))
            .catch(error => alert(error))
      }
      myData()
   }, [])

   //Set
   const indexOfLastPost = currentPage * postPerPage
   const indexOfFirstPost = indexOfLastPost - postPerPage
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

   //Paginate
   const paginate = pageNumber => setCurrentPage(pageNumber)

   return (
      <div>
         <Grid centered padded>
            Soy el Index
         </Grid>
         <FadeInUp>
            <Grid columns={3} centered padded>
               <Grid.Column mobile={16} computer={3}>
                  <Segment raised>
                     <Placeholder>
                        <Placeholder.Header image>
                           <Placeholder.Line />
                           <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                           <Placeholder.Line length="medium" />
                           <Placeholder.Line length="short" />
                        </Placeholder.Paragraph>
                     </Placeholder>
                  </Segment>
               </Grid.Column>

               <Grid.Column mobile={16} computer={3}>
                  <Segment raised>
                     <Placeholder>
                        <Placeholder.Header image>
                           <Placeholder.Line />
                           <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                           <Placeholder.Line length="medium" />
                           <Placeholder.Line length="short" />
                        </Placeholder.Paragraph>
                     </Placeholder>
                  </Segment>
               </Grid.Column>

               <Grid.Column mobile={16} computer={3}>
                  <Segment raised>
                     <Placeholder>
                        <Placeholder.Header image>
                           <Placeholder.Line />
                           <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                           <Placeholder.Line length="medium" />
                           <Placeholder.Line length="short" />
                        </Placeholder.Paragraph>
                     </Placeholder>
                  </Segment>
               </Grid.Column>
            </Grid>
         </FadeInUp>
         <Grid centered padded>
            <Posts posts={currentPosts} />
         </Grid>
         <Grid centered padded>
            <Grid.Row>
               <Navigator
                  postPerPage={postPerPage}
                  totalPosts={posts.length}
                  paginate={paginate}
                  currentPage={currentPage}
               />
            </Grid.Row>
         </Grid>
      </div>
   )
}

export default Index
