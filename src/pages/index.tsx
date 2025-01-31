// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
//import Profile from "../pages/components/profile_props"
//import Gallery from "../pages/qcomps/gallery_props"
import RecipeList from "./qcomps/recipes"
//import List from "./qcomps/list_keys_id"
import Gallery from "../pages/qcomps/state"
//import Form from "../pages/components/snapshot2"
import RequestTracker from '../pages/qcomps/shoppingCart'
import Form from "./components/updObjects"
import Scoreboard from "./qcomps/updObjectsForm"
//import Counter from "../pages/components/snapshot"
//import List from "../pages/components/list_keys"
import List from "./qcomps/artistsRemoveArr"
import BucketList from "./qcomps/arrObj"
export default function Home() {
  return (
    <div>
      <BucketList/>
    </div>
  )
}
