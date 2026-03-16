import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Home = () => {
  return (
    <div>
      <Button variant="secondary" size="lg">// GET STARTED - LG <ArrowRight /></Button>
      <Button variant="default" size="sm">// GET STARTED - SM<ArrowRight /></Button>
    </div>
  )
}

export default Home