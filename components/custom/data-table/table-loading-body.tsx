import { LuLoader } from 'react-icons/lu';

import { TableEmptyBody } from '@/components/custom/data-table/table-empty-body';

function TableLoadingBody() {
  return (
    <TableEmptyBody
      icon={<LuLoader className="animate-spin" strokeWidth={2} />}
      title="Loading ..."
      description="Please wait while data is being fetched."
    />
  );
}

export { TableLoadingBody };
