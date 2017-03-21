				$("#jqGrid").jqGrid({
					url: 'data.JSON',
					datatype: "json",
					autowidth: true,
					caption:'this is the caption',
					colModel: [{
							label: 'Category Name',
							name: 'CategoryName'

						}, {
							label: 'Product Name',
							name: 'ProductName'

						}, {
							label: 'Country',
							name: 'Country'

						}, {
							label: 'Price',
							name: 'Price',

							sorttype: 'integer'
						},
						// sorttype is used only if the data is loaded locally or loadonce is set to true
						{
							label: 'Quantity',
							name: 'Quantity',

							sorttype: 'number'
						}
					],
					viewrecords: true, // show the current page, data rang and total records on the toolbar
					height: '100%',
					rowNum: 30,
					loadonce: true, // this is just for the demo
					pager: "#jqGridPager"
				});