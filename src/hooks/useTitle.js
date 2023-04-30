import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Newspaper - ${title}`;
  }, [title]);
};
export default useTitle;
