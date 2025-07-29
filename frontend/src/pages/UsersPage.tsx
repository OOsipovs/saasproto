import { useQuery } from "@tanstack/react-query";
import { fetchUsersInTenant } from "../api";
import styles from "./page.module.css";

const UsersPage: React.FC = () => {
    const {data: users} = useQuery({
        queryKey: ["users"],
        queryFn: fetchUsersInTenant
    });

    return <div className={styles.page}>
        <h1>Users</h1>
        <pre>{JSON.stringify(users)}</pre>
    </div>
};

export default UsersPage;

