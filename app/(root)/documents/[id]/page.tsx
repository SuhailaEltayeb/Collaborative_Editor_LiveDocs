import CollaborativeRoom from '@/components/CollaborativeRoom'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Document = () => {
  return (
    <div>
      <CollaborativeRoom
      />
    </div>
  )
}

export default Document