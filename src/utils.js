import { db } from './firebaseApp'
import { collection, onSnapshot } from 'firebase/firestore'

export const readTodos=(setTodos)=>{
    const todolistRef=collection(db,'todolist')
    const unsubscribe=onSnapshot(todolistRef,(snapshot)=>{
      setTodos(snapshot.docs.map(doc=>({...doc.data(),id:doc.id }) ));
    })
    return ()=>unsubscribe()

}