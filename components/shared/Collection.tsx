import React from "react";

interface Props {
  data: any;
  emptyTitle: any;
  emptyStateSubtext: any;
  collectionType: any;
  limit: any;
  page: any;
  totalPages: any;
}

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  collectionType,
  limit,
  page,
  totalPages,
}: Props ) => {
  return <div>Collection</div>;
};

export default Collection;
