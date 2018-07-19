from rest_framework import serializers

class ProgramSerializer(serializers.Serializer):
    program = serializers.CharField()

    def run(self):
        program = self.validated_data['program']
        