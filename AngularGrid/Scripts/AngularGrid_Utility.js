function Utility() {


    //this.range = function (min, max, step) {
    //    step = step || 1;
    //    var input = [];
    //    for (var i = min; i <= max; i += step) input.push(i);
    //    return input;
    //};

    this.range = function (min, virtualCount, size, step) {
        step = step || 1;
        var input = [];
        for (var i = min; i <= Math.ceil(virtualCount / size) ; i += step) input.push(i);
        return input;
    };

    this.Paging = function (VitualCount, PageSize, Index) {

        var PagingMessage = "";

        if (VitualCount > PageSize) {
            var Index2 = Index * PageSize;
            Index = (PageSize * Index) - (PageSize - 1);
            if (Index2 > VitualCount) {
                Index2 = VitualCount;
            }
            return PagingMessage = "Showing " + Index + " to " + Index2 + " of " + VitualCount + " entries";
        }
        else {
            return PagingMessage = "Showing " + Index + " to " + VitualCount + " of " + VitualCount + " entries";
        }
    }

    this.nextPage = function (currentPage, VirtualItemCount, PageSize, NoOfPages) {
        if (currentPage < Math.ceil(VirtualItemCount / PageSize)) {
            currentPage++;
            if (currentPage > 10) {
                Utility.range(currentPage, VirtualItemCount, currentPage + 10, 1)
            }
        }
        return currentPage;
    }

    this.prevPage = function (currentPage) {
        if (currentPage > 1) {
            currentPage--;
        }
        return currentPage;
    }


    function Error(Message) {
        alert(Message);
    }



    this.initPromises = function initPromises(q) {

        defer = q.defer();
        var promise = defer.promise;
        promise.then('', Error);
        return defer;
    }



    this.sortBy = function (propertyName) {
        this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
        this.propertyName = propertyName;
    };

    this.nextPage = function (currentPage, VirtualItemCount, PageSize, NoOfPages) {
        if (currentPage < Math.ceil(VirtualItemCount / PageSize)) {
            currentPage++;
            if (currentPage > 10) {
                Utility.range(currentPage, currentPage + 10, 1)
            }
        }
        return currentPage;
    }

    this.prevPage = function (currentPage) {
        if (currentPage > 1) {
            currentPage--;
        }
        return currentPage;
    }

    this.setPage = function () {
        this.currentPage = this.n;
    };





}