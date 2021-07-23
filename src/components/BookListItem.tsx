import React from "react";

import { Book } from "../domain/types";

interface BookListItemProps extends Book {}

const BookListItem: React.FC<BookListItemProps> = ({ title }) => <p>{title}</p>;

export default BookListItem;
