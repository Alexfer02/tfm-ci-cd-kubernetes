{{- define "microservicio-devops.name" -}}
microservicio-devops
{{- end -}}

{{- define "microservicio-devops.fullname" -}}
{{ include "microservicio-devops.name" . }}-{{ .Release.Name }}
{{- end -}}