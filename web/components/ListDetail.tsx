import * as React from 'react'

import { User } from '../interfaces'

type ListDetailProps = {
  item: User
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item: user,
}) => (
  <div>
    <h1>Detail for {user.username}</h1>
    <p>ID: {user._id}</p>
  </div>
)

export default ListDetail