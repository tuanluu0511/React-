import Card from '../../UI/Card/Card';
import styles from './UserLists.module.css';

const UserLists = (props) => {
  const usersList = props.users;
  console.log(usersList);

  let content = '';
  if (usersList.length > 0) {
    content = (
      <ul>
        {usersList.map((user) => (
          <li key={user.id}>{`${user.name} (${user.age} years old)`}</li>
        ))}
      </ul>
    );
  }

  return <Card className={styles.users}>{content}</Card>;
};

export default UserLists;
