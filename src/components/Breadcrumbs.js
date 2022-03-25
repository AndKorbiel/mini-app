import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function InnerBreadcrumbs(crumbs) {
  const params = useParams();
  useEffect(() => {
    console.log(crumbs);
    console.log(params);
  }, []);
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default InnerBreadcrumbs;
