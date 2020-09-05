import React, {useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodoAction} from '../store/todosActions'

export function AddTodoForm () {
  const dispatch = useDispatch()
  const input = useRef(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await dispatch(addTodoAction(input.current.value))
    setLoading(false)
    input.current.value = ''
    input.current.focus()
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Tâche" ref={input} />
    <button disabled={loading}>Ajouter</button>
    {loading && 'Chargement...'}
  </form>
}
