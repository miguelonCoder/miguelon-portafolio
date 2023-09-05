import { useEffect } from "react"
import { useStore } from "@nanostores/react"
import { slide } from '../store'

 const SkillGroup = ({ title, skills}) => {
  const slideValue = useStore(slide)

  useEffect(() => {
    console.log(title, skills)
  }, [slideValue])

  return <div>🚀 I am a React Component 🚀</div>
}

export default SkillGroup