import { useRecordContext, Link } from "react-admin";
import LaunchIcon from "@mui/icons-material/Launch";

export const MyUrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  return record ? (
    <Link
      href={record[source]}
      to={record[source]}
      sx={{ textDecoration: "none" }}
    >
      {record[source]}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  ) : null;
};
