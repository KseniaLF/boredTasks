import { updateResolveStatus } from "../services/DB";

export const handleUpdateResolveStatus = (id, setTasks) => {
  const fetch = async () => {
    const data = await updateResolveStatus(id, { resolved: true });

    setTasks((prev) => prev.filter((task) => task["_id"] !== id));
  };

  fetch();
};
