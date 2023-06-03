import React from "react";

function ListHead() {
  return (
    <thead class="text-xs text-gray-50 uppercase bg-[#023047] h-[60px] ">
      <tr>
        <th scope="col" class="p-4">
          <div class="flex items-center">
            <input
              id="checkbox-all-search"
              type="checkbox"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="checkbox-all-search" class="sr-only">
              checkbox
            </label>
          </div>
        </th>
        <th scope="col" class="px-6 py-3">
          Name
        </th>
        <th scope="col" class="px-6 py-3">
          Job
        </th>
        <th scope="col" class="px-6 py-3">
          Status
        </th>
        <th scope="col" class="px-6 py-3">
          Role
        </th>
        <th scope="col" class="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
  );
}

export default ListHead;
