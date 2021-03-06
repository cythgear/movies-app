from rest_framework import permissions

class OnlyStaffCanPost(permissions.BasePermission):

    def has_permission(self, request, view):

        if request.method in permissions.SAFE_METHODS:
            if request.method == "POST":
                if request.user.is_staff:
                    return True
                else:
                    return False
            
            return True


class OnlyStaffCanGet(permissions.BasePermission):
    def has_permission(self, request, view):
        
        if request.method in permissions.SAFE_METHODS:
            if request.method == "GET":
                if request.user.is_staff:
                    return True
                else:
                    return False
        
            return True