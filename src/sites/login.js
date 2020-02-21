import React, { useState, useEffect, useContext } from "react"
import { Grid, Button, Dimmer, Loader, Icon } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import axios from "axios"

import Posts from "../components/posts"
import Navigator from "../components/navigator"
import UserLogged from "../helpers/userLogged"

const Index = props => {
   const [posts, setPosts] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [postPerPage] = useState(6)

   useEffect(() => {
      const myData = async () => {
         await axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setPosts(res.data))
            .then(res => setLoader(false))
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

   const { logged, setLogged } = useContext(UserLogged)
   const [loader, setLoader] = useState(true)

   return (
      <div>
         {logged ? (
            <Grid centered padded="vertically">
               {loader ? (
                  <Dimmer active inverted page>
                     <Loader size="normal" />
                  </Dimmer>
               ) : null}

               <Grid.Row centered padded="vertically">
                  <Posts posts={currentPosts} />
               </Grid.Row>
               <Grid.Row centered padded="vertically">
                  <Navigator
                     postPerPage={postPerPage}
                     totalPosts={posts.length}
                     paginate={paginate}
                     currentPage={currentPage}
                  />
               </Grid.Row>

               <Grid.Row centered padded="vertically">
                  <Button color="purple" onClick={() => setLogged(false)}>
                     Logout
                  </Button>
               </Grid.Row>
            </Grid>
         ) : (
            <Grid centered padded="vertically">
               <Grid.Row centered padded="vertically">
                  <lottie-player
                     src="https://assets1.lottiefiles.com/packages/lf20_phbKJx.json"
                     background="transparent"
                     speed="1"
                     style={{ width: 300, height: 300 }}
                     autoplay
                     loop
                  ></lottie-player>
               </Grid.Row>
               <Grid.Row centered>
                  <Button
                     size="large"
                     animated
                     color="purple"
                     onClick={() => setLogged(true)}
                  >
                     <Button.Content visible>Login</Button.Content>
                     <Button.Content hidden>
                        <Icon name="heart" />
                     </Button.Content>
                  </Button>
               </Grid.Row>
            </Grid>
         )}
      </div>
   )
}

export default Index
