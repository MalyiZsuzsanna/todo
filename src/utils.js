
import { db, auth } from './firebaseApp'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const readTodos=(setTodos)=>{
    const todolistRef=collection(db,'todolist')
    const q=query(todolistRef,orderBy('timestamp','desc'))
    onSnapshot(q,(snapshot)=>{
      setTodos(snapshot.docs.map(doc=>({...doc.data(),id:doc.id }) ));
    })
   

}
export const toggleDone=async (id,done)=>{
  const docRef=doc(db,'todolist',id)
  await updateDoc(docRef,{done})
}

//új tenivaló hozzáadása:
export const addNewTodo=async (newItem)=>{
  const collectionRef=collection(db,'todolist')
  const newTodo={
    descr:newItem,
    done:false,
    timestamp:serverTimestamp()
  }
  await addDoc(collectionRef,newTodo)
}

//törlés a tenivalók listából:
export const deleteTodo=async (id)=>{
  const docRef=doc(db,'todolist',id)
  await deleteDoc(docRef)
}

//authentikációhoz fog kelleni:
export const signIn=async (email,password)=>{
  try{
    await signInWithEmailAndPassword(auth,email,password)
  }catch(err){
    console.log(err);
  }
}
//eseményfigyelő:
export const getCurrentUser=(setUser)=>{
  onAuthStateChanged(auth,(current)=>setUser(current))
}
export const signOuthUser=async ()=>{
  await signOut(auth)
}