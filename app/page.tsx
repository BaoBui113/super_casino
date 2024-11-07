import Banner from './components/Homepage/Banner'
import ListGame from './components/Homepage/ListGame'
import ListHero from './components/Homepage/ListHero'
import Notification from './components/Homepage/Notification'
import RankPlayer from './components/Homepage/RankPlayer'
export default function Home() {
  return (
    <main>
      <Banner />
      <ListGame />
      <ListHero />
      <RankPlayer />
      <Notification />
    </main>
  )
}
