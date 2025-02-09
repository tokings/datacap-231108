package io.edurt.datacap.service.service;

import io.edurt.datacap.common.response.CommonResponse;
import io.edurt.datacap.service.body.TableFilter;
import io.edurt.datacap.service.entity.metadata.TableEntity;

import java.util.List;

public interface TableService
        extends BaseService<TableEntity>
{
    /**
     * Retrieves all records from the specified database.
     *
     * @param id the ID of the database
     * @return a common response containing a list of table entities
     */
    CommonResponse<List<TableEntity>> getAllByDatabase(Long id);

    /**
     * Retrieves data from the database based on the provided ID and table filter.
     *
     * @param id the ID of the data to retrieve
     * @param configure the table filter to apply to the data retrieval
     * @return a common response object containing the retrieved data
     */
    CommonResponse<Object> fetchDataById(Long id, TableFilter configure);
}
