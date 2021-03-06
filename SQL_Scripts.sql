
USE [EmployeeDB]
GO
/****** Object:  Table [dbo].[EmployeeDetail]    Script Date: 01/16/2017 17:37:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeDetail](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[EmpNo] [int] NOT NULL,
	[EmpName] [nvarchar](200) NULL,
	[EmpEmailID] [nvarchar](100) NULL
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[usp_GetEmployeeDetail]    Script Date: 01/16/2017 17:37:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
/*****************************************************************************
	** Description:	
	** Author:		Amit P Naik
	** Date:		21-Dec-2016
	** Example 1:	exec [usp_GetEmployeeDetail] 10,1
					exec [usp_GetEmployeeDetail] 10,2
					exec [usp_GetEmployeeDetail] 20,1
		
	******************************************************************************
	** Change History
	******************************************************************************
	** PR   Date			Author					Description	
	** --   --------		-------					------------------------------------
	** 1    					
	******************************************************************************/
	
CREATE PROCEDURE [dbo].[usp_GetEmployeeDetail]
	@PageSize int,
	@PageIndex int
AS
BEGIN
	SET NOCOUNT ON;
		
	;WITH InboxRecords AS 
	(Select   
		row_number() over(ORDER BY EmpNo ASC) AS CNT,
		COUNT(*) OVER  (Partition  by NULL) 'VirtualItemCount',
		* FROM (
				SELECT  * from dbo.EmployeeDetail
	)AS A) 
	SELECT  
		*
	from InboxRecords C  
		WHERE CNT BETWEEN ((@PageIndex - 1) * @PageSize + 1)
		AND (@PageIndex * @PageSize)
END
GO
