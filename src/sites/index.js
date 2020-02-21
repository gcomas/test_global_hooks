import React, { useState, useEffect, useContext } from "react"
import {
   Message,
   Grid,
   Form,
   Input,
   Card,
   Segment,
   Button,
   Icon,
   Label,
   List
} from "semantic-ui-react"
import { fadeInUp } from "react-animations"
import styled, { keyframes } from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import uuid from "uuid"
import UserLogged from "../helpers/userLogged"

const key_fadeInUp = keyframes`${fadeInUp}`

const FadeInUpKey = styled(Grid.Column)`
   animation: 600ms ${key_fadeInUp};
`

export default function Login(props) {
   const initialTodos = [
      {
         id: uuid(),
         title: "Empanadas"
      },
      {
         id: uuid(),
         title: "Pizzas"
      },
      {
         id: uuid(),
         title: "Pastas"
      },
      {
         id: uuid(),
         title: "Asado de tira"
      },
      {
         id: uuid(),
         title: "Postres"
      }
   ]
   const [todos, settodos] = useState(initialTodos)
   const [todo, settodo] = useState("")
   const [todofiltered, setTodofiltered] = useState("")
   const [selected, setselected] = useState([])
   const { logged, setLogged } = useContext(UserLogged)

   const items = [
      "You do not have access to this section.",
      "Log in Login section"
   ]

   function findDuplicates() {
      return todos.filter(
         (item, index) => item.title.toLowerCase() === todo.toLowerCase()
      )
   }

   function sendElement(arr) {
      if (findDuplicates().length === 0 && todo !== "") {
         todos.push({
            id: uuid(),
            title: todo
         })
      }
      settodo("")
   }

   function selectElement(e) {
      setselected(todos.filter(element => element.title === e))
      setTodofiltered("")
   }

   const filteredTodo = todos.filter(todo => {
      return todo.title.toLowerCase().indexOf(todofiltered.toLowerCase()) !== -1
   })

   const deleteTodo = id => {
      // todos.splice(index, 1) //Esta también funciona
      const deleted = todos.filter(items => items.id !== id)
      settodos(deleted)
   }

   useEffect(() => {
      settodos(todos)
   }, [todos])

   return (
      <div>
         {logged ? (
            <Grid padded="vertically" centered>
               <Grid.Row>
                  <Grid.Column mobile={16} tablet={8} computer={6}>
                     <FadeInUpKey>
                        <Label floated="right" as="div" basic pointing="below">
                           Autocomplete of tasks
                        </Label>
                     </FadeInUpKey>
                     <Input
                        fluid
                        value={todofiltered}
                        onChange={e => {
                           setTodofiltered(e.target.value)
                        }}
                        icon="search"
                        placeholder="Search..."
                     />
                     <div
                        style={{
                           zIndex: 1,
                           position: "absolute",
                           width: "100%",
                           left: 0,
                           paddingLeft: "1rem",
                           paddingRight: "1rem"
                        }}
                     >
                        <List>
                           <TransitionGroup className="todo-list">
                              {todofiltered !== "" && todofiltered.length >= "3"
                                 ? filteredTodo.map(({ id, title }) => {
                                      return (
                                         <CSSTransition
                                            key={id}
                                            timeout={600}
                                            classNames="item"
                                            exit={false}
                                         >
                                            <List.Item>
                                               <Card color="purple" fluid>
                                                  <Segment>
                                                     <Grid verticalAlign="middle">
                                                        <Grid.Column
                                                           onClick={() =>
                                                              selectElement(
                                                                 title
                                                              )
                                                           }
                                                           floated="left"
                                                           mobile={16}
                                                        >
                                                           {title}
                                                        </Grid.Column>
                                                        <div
                                                           style={{
                                                              alignItems:
                                                                 "center",
                                                              display: "flex",
                                                              padding: 0
                                                           }}
                                                        ></div>
                                                     </Grid>
                                                  </Segment>
                                               </Card>
                                            </List.Item>
                                         </CSSTransition>
                                      )
                                   })
                                 : null}
                              {filteredTodo.length === 0 &&
                              todos.length !== 0 ? (
                                 <CSSTransition timeout={500} classNames="item">
                                    <Message color="red">No results...</Message>
                                 </CSSTransition>
                              ) : null}
                           </TransitionGroup>
                        </List>
                     </div>
                  </Grid.Column>
               </Grid.Row>
               <Grid.Row>
                  <Grid.Column mobile={11} tablet={5} computer={4}>
                     <Form onSubmit={() => sendElement()}>
                        <Form.Field>
                           <Input
                              fluid
                              icon="add"
                              placeholder="Agregar..."
                              value={todo}
                              onChange={e => settodo(e.target.value)}
                           />
                        </Form.Field>
                     </Form>
                  </Grid.Column>
                  <Grid.Column mobile={5} tablet={3} computer={2}>
                     <Button fluid color="purple" onClick={() => sendElement()}>
                        Agregar
                     </Button>
                  </Grid.Column>
               </Grid.Row>
               <Grid.Row>
                  <Grid.Column mobile={16} tablet={8} computer={6}>
                     <List>
                        <TransitionGroup className="todo-list">
                           {todos.map(({ id, title }) => {
                              return (
                                 <CSSTransition
                                    key={id}
                                    timeout={400}
                                    classNames="item"
                                    exit={false}
                                 >
                                    <List.Item>
                                       <Card color="purple" fluid>
                                          <Segment>
                                             <Grid verticalAlign="middle">
                                                <Grid.Column
                                                   floated="left"
                                                   mobile={5}
                                                   tablet={8}
                                                   computer={8}
                                                >
                                                   {title}
                                                </Grid.Column>
                                                <div
                                                   style={{
                                                      alignItems: "center",
                                                      display: "flex",
                                                      padding: 0
                                                   }}
                                                >
                                                   <Button
                                                      onClick={() =>
                                                         deleteTodo(id)
                                                      }
                                                      basic
                                                      icon
                                                      size="small"
                                                   >
                                                      <Icon name="delete" />
                                                   </Button>
                                                </div>
                                             </Grid>
                                          </Segment>
                                       </Card>
                                    </List.Item>
                                 </CSSTransition>
                              )
                           })}
                        </TransitionGroup>
                     </List>
                  </Grid.Column>
               </Grid.Row>
               <Grid.Row verticalAlign="middle">
                  <Grid.Column mobile={4} tablet={8} computer={2}>
                     Elemento seleccionado:
                  </Grid.Column>
                  <Grid.Column mobile={12} tablet={8} computer={4}>
                     <Card fluid color="purple">
                        <Segment>
                           {selected.length !== 0 ? (
                              selected.map(({ id, title }) => {
                                 return (
                                    <FadeInUpKey key={id}>
                                       <div>{title}</div>
                                    </FadeInUpKey>
                                 )
                              })
                           ) : (
                              <>
                                 <Input disabled transparent loading>
                                    -
                                 </Input>
                              </>
                           )}
                           <div
                              style={{
                                 alignItems: "center",
                                 display: "flex",
                                 padding: 0
                              }}
                           ></div>
                        </Segment>
                     </Card>
                  </Grid.Column>
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
                  <Message negative>
                     <Message.Header>
                        You dont have permission to this page
                     </Message.Header>
                     <Message.List items={items} />
                  </Message>
               </Grid.Row>
            </Grid>
         )}
      </div>
   )
}
