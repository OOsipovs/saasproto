import { useQuery } from "@tanstack/react-query";
import styles from "./page.module.css";
import { fetchReportData } from "../api";

const ReportsPage: React.FC = () => {
    const {data: reports} = useQuery({
        queryKey: ["reports"],
        queryFn: fetchReportData
    });
    return <div className={styles.page}>
        <h1>Reports</h1>
        <pre>{JSON.stringify(reports)}</pre>
    </div>
};
 

export default ReportsPage;

