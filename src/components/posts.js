import React from "react"
import {
   Message,
   Grid,
   Form,
   Input,
   Card,
   Segment,
   Button,
   Item,
   Icon,
   Label,
   Dimmer,
   Loader,
   List
} from "semantic-ui-react"

const Posts = ({ posts }) => {
   console.log(posts)
   return (
      <div>
         {posts.map((post, id) => {
            return (
               <List.Item key={id}>
                  <Card color="blue" fluid>
                     <Segment>
                        <Grid verticalAlign="middle">
                           <Grid.Column floated="left" mobile={16}>
                              {post.title}
                           </Grid.Column>
                           <div
                              style={{
                                 alignItems: "center",
                                 display: "flex",
                                 padding: 0
                              }}
                           ></div>
                        </Grid>
                     </Segment>
                  </Card>
               </List.Item>
            )
         })}
      </div>
   )
}

export default Posts
